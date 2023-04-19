package java.com.parental_control; // replace com.your-app-name with your app’s name

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.bridge.Promise;

import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.*;

import android.app.AlertDialog;
import android.graphics.Bitmap;
import android.graphics.drawable.BitmapDrawable;
import android.graphics.drawable.AdaptiveIconDrawable;
import android.graphics.Canvas;
import android.util.Base64;
import android.util.Log;
import android.annotation.SuppressLint;

import android.app.usage.UsageStats;
import android.app.usage.UsageStatsManager;
import android.app.AppOpsManager;
import android.app.Activity;
import android.app.AppOpsManager;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageManager;

import android.content.Context;
import android.content.Intent;
import android.content.DialogInterface;
import android.graphics.drawable.Drawable;
import android.os.Build;
import android.os.Bundle;
import android.os.Process;
import android.net.Uri;


import android.Manifest;

import androidx.annotation.NonNull;
import androidx.annotation.RequiresApi;

import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;
import androidx.appcompat.app.AppCompatActivity;


import android.provider.Settings;

import java.util.Map;
import java.util.HashMap;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import java.util.Objects;
import java.io.ByteArrayOutputStream;

import static android.content.Context.USAGE_STATS_SERVICE;


public class ParentalControlModule extends ReactContextBaseJavaModule {

    private static final String TAG = "ParentalControlModule";
    private static final int REQUEST_USAGE_STATS_PERMISSION = 101;


    public ParentalControlModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "ParentalControlModule";
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        // Add any constants you need here
        return constants;

    }


    @RequiresApi(api = Build.VERSION_CODES.LOLLIPOP)
    @ReactMethod
    public void getUsageStats(Promise promise) {
        //a reference to the Context object at the beginning of the getUsageStats method:

        // Check if the app has the PACKAGE_USAGE_STATS permission
        if ( !checkUsageStatsPermission() ) {
            // Permission not granted, request it
            Activity activity = getCurrentActivity();
            if (activity != null) {
                // Show a prompt to explain why the permission is needed
                AlertDialog.Builder builder = new AlertDialog.Builder(activity);
                builder.setTitle("Необходимо разрешение");
                builder.setMessage("This app needs to access your usage stats to provide usage information.");
                builder.setPositiveButton("Перейти к опциям", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        // Request the permission
                        Intent intent = new Intent(Settings.ACTION_USAGE_ACCESS_SETTINGS);
                        activity.startActivity(intent);
                    }
                });
                builder.setNegativeButton("Deny", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        // Show an error message if the user denies permission
                        AlertDialog.Builder builder = new AlertDialog.Builder(activity);
                        builder.setTitle("В разрешении отказано");
                        builder.setMessage("This app cannot function without access to your usage stats. Please grant the permission in the app settings.");
                        builder.setPositiveButton("Open Settings", new DialogInterface.OnClickListener() {
                            @Override
                            public void onClick(DialogInterface dialog, int which) {
                                // Open the app settings where the user can grant the permission
                                Intent intent = new Intent(Settings.ACTION_USAGE_ACCESS_SETTINGS);
                                intent.setData(Uri.parse("package:" + getReactApplicationContext().getPackageName()));
                                activity.startActivity(intent);
                            }
                        });
                        builder.setNegativeButton("Отказать", null);
                        builder.create().show();
                    }
                });
                builder.create().show();
            }
            promise.reject("PERMISSION_NOT_GRANTED", "The PACKAGE_USAGE_STATS permission is not granted");
            return;
        }

        // Permission granted, get the UsageStatsManager system service
        UsageStatsManager usageStatsManager  = (UsageStatsManager) getReactApplicationContext().getSystemService(USAGE_STATS_SERVICE);
        // Set the start time to 24 hours ago and the end time to the current time
        Calendar calendar = Calendar.getInstance();
        calendar.set(Calendar.HOUR_OF_DAY, 0);
        calendar.set(Calendar.MINUTE, 0);
        calendar.set(Calendar.SECOND, 0);
        long start = calendar.getTimeInMillis();
        long end = System.currentTimeMillis();

        // Log the time range we're querying
        Log.d(TAG, "Getting usage stats from " + start + " to " + end);
        // Query the UsageStatsManager for usage stats for the given time range
        List<UsageStats> usageStatsList = usageStatsManager .queryUsageStats(UsageStatsManager.INTERVAL_DAILY, start, end);

        // Create a list to hold the usage stats data
        WritableArray usageList = Arguments.createArray();

        Log.d(TAG, "Usage data: " + usageList.toString());

        // Get the PackageManager to retrieve app icons and names
        PackageManager pm = getReactApplicationContext().getPackageManager();

        // Loop through the list of usage stats and add them to the usageList
        for (UsageStats usageStats : usageStatsList) {
            try {
                // Get the ApplicationInfo for the current package name
                ApplicationInfo ai = pm.getApplicationInfo(usageStats.getPackageName(), 0);
                // Get the app's icon
                Drawable icon = pm.getApplicationIcon(ai);
                // Convert the icon to a base64-encoded string
                String iconBase64 = drawableToBase64(icon);
                // Get the app's name
                String name = pm.getApplicationLabel(ai).toString();
                // Get the app's total usage time in milliseconds
                long timeUsed = usageStats.getTotalTimeInForeground();
                // Only add apps that have been used for more than 59 sec
                if (timeUsed > 30000) {
                    WritableMap usageMap = Arguments.createMap();
                    // Create a WritableMap to hold the usage stats for this app
                    usageMap.putString("packageName", usageStats.getPackageName());
                    usageMap.putString("iconUri", "data:image/png;base64," + iconBase64);
                    usageMap.putString("name", name);
                    usageMap.putDouble("timeUsed", timeUsed);
                    // Add the usage stats for this app to the usageList
                    usageList.pushMap(usageMap);
                }
            } catch (PackageManager.NameNotFoundException e) {
                // If we can't get the ApplicationInfo for a package name, log an error and continue to the next package
                Log.e(TAG, "Failed to get ApplicationInfo for package: " + usageStats.getPackageName(), e);
            }
        }
        // Resolve the promise with the usageList

        promise.resolve(usageList);
    }

    private boolean checkUsageStatsPermission() {
        AppOpsManager appOpsManager = (AppOpsManager) getCurrentActivity().getSystemService(AppCompatActivity.APP_OPS_SERVICE);
        int mode;
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
            mode = appOpsManager.unsafeCheckOpNoThrow(
                    "android:get_usage_stats",
                    Process.myUid(),
                    getCurrentActivity().getPackageName()
            );
        } else {
            mode = appOpsManager.checkOpNoThrow(
                    "android:get_usage_stats",
                    Process.myUid(),
                    getCurrentActivity().getPackageName()
            );
        }
        return mode == AppOpsManager.MODE_ALLOWED;
    }

    private String drawableToBase64(Drawable drawable) {
        Bitmap bitmap;
        // check if the drawable is a BitmapDrawable
        if (drawable instanceof BitmapDrawable) {
            bitmap = ((BitmapDrawable) drawable).getBitmap();
        } else if (drawable instanceof AdaptiveIconDrawable) {
            bitmap = Bitmap.createBitmap(drawable.getIntrinsicWidth(), drawable.getIntrinsicHeight(), Bitmap.Config.ARGB_8888);
            Canvas canvas = new Canvas(bitmap);
            drawable.setBounds(0, 0, canvas.getWidth(), canvas.getHeight());
            drawable.draw(canvas);
        } else {
            throw new IllegalArgumentException("Unsupported drawable type");
        }
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        bitmap.compress(Bitmap.CompressFormat.PNG, 100, baos);
        byte[] bytes = baos.toByteArray();
        return Base64.encodeToString(bytes, Base64.DEFAULT);
    }

}
