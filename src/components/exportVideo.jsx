import { renderMedia } from '@remotion/renderer';
import { RemotionVideo } from './RemotionVideo';  

export const exportVideo = (canvasData) => {
  renderMedia({
    composition: () => <RemotionVideo canvasData={canvasData}/>,
    outputLocation: './output/video.mp4', 
    overwrite: true,
  });
};
