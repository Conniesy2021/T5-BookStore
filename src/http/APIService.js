import storage from '@react-native-firebase/storage'; // 1

uploadImageToStorage(path, imageName); {
    let reference = storage().ref(imageName);         // 2
    let task = reference.putFile(path);               // 3

    task.then(() => {                                 // 4
        console.log('Image uploaded to the bucket!');
    }).catch((e) => console.log('uploading image error => ', e));
}