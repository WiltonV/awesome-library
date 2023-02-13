@objc(AwesomeLibrary)
class AwesomeLibrary: NSObject {

  @objc(multiply:withB:withResolver:withRejecter:)
  func multiply(a: Float, b: Float, resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
    resolve(a*b)
  }

  @objc(openCamera:withRejecter:)
  func openCamera(resolve:RCTPromiseResolveBlock, reject:RCTPromiseRejectBlock) -> Void {
    let imagePicker = UIImagePickerController()
    imagePicker.sourceType = .photoLibrary;

    DispatchQueue.main.async {
      RCTPresentedViewController()?.present(imagePicker, animated: true, completion: nil)
    }

    resolve("Camera iOS aberta com sucesso!");
  }
}
