#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(AwesomeLibrary, NSObject)

// Export a native method called 'multiply' to JavaScript Library
RCT_EXTERN_METHOD(multiply:(float)a withB:(float)b
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)

// Export a native method called 'openCamera' to JavaScript Library
RCT_EXTERN_METHOD(openCamera:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)

+ (BOOL)requiresMainQueueSetup
{
  return NO;
}

@end
