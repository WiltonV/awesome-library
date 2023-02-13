package com.awesomelibrary

import android.content.Intent
import android.provider.MediaStore
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

class AwesomeLibraryModule(reactContext: ReactApplicationContext) :
  ReactContextBaseJavaModule(reactContext) {

  private val reactContext: ReactApplicationContext = reactContext;

  override fun getName(): String {
    return NAME
  }

  // Example method
  // See https://reactnative.dev/docs/native-modules-android
  @ReactMethod
  fun multiply(a: Double, b: Double, promise: Promise) {
    promise.resolve(a * b)
  }

  @ReactMethod
  fun openCamera(promise: Promise) {
    val intent = Intent(Intent.ACTION_PICK, MediaStore.Images.Media.INTERNAL_CONTENT_URI)
    reactContext.startActivityForResult(intent, 100, null)
    promise.resolve("Camera ANDROID aberta com sucesso!")
  }

  companion object {
    const val NAME = "AwesomeLibrary"
  }
}
