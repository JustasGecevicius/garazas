export async function checkImage(url: string) {
  const check = await new Promise<boolean>((resolve, reject) => {
    const image = new Image();
    image.onload = function () {
      if (this.width > 0) {
        resolve(true);
      }
      resolve(false);
    };
    image.onerror = function () {
      reject(false);
    };
    image.src = url;
  });
  return check;
}
