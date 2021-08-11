import Jimp from 'jimp';
import path from 'path';

const ImageResize = async (
  width: number,
  height: number,
  filename: string
): Promise<{ success: boolean; result: string }> => {
  try {
    const image = await Jimp.read(
      path.join('./assets', 'full', filename + '.jpg')
    );
    const newFileName = `${filename}_${width}_${height}.${image.getExtension()}`;
    await image
      .resize(width, height, Jimp.RESIZE_BEZIER)
      .writeAsync(path.join('./assets', 'thumb', newFileName));
    return { success: true, result: newFileName };
  } catch (err) {
    return { success: false, result: err };
  }
};

export default ImageResize;
