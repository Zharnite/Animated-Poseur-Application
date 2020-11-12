import React, { useRef, useEffect, useState } from 'react';
import background from '../../../illustration/images/canvas_background.png'
import CanvasLayer from './CanvasLayer'


function prelim(a, b, c){
  let flag = false;
  if("erasetool" == a){
    b.globalCompositeOperation = "destination-out";
    b.strokeStyle = "rgba(0,0,0,1)";
    b.lineWidth = 5
    flag = !flag
  }
  else if("painttool" == a){
    b.globalCompositeOperation = "source-over";
    b.strokeStyle = "round";
    b.lineWidth = 5 
    b.fillStyle = "black";
    flag = !flag
  }

  return flag;

}





function App(props) {
  console.log(props.editingStateAccess)
  let layers = props.editingStateAccess.editingState.frame.layers; 
  //console.log(props)
  
  // const [layersList, setLayerList] = useState([
  //   {pos: 0, data:"image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAgAElEQVR4nO19a5Dc1nUmJEqWrF1LsrUSLdqiSIqcBrrJeTaAHrvWUaLXABjq4UiWtHrYejqyXokkkhL1mDIdPWxvmSq7TC5tUdNADyk5VfHWrqviSu1uxeuUY8Urb+JS1nYS2Wx0zwx7RLIBDBnrxemzP4CLe+7FBbpnOJyh6LlVt8jpbqCBe77zne+ce3FbkpbaUltqS22pLbWlttSW2lJbakttqS21pbbUltpSW2rz0968ZsVFE8Pyd2qWMlM1ZQi7Ev5ryOCaeahZSlAblh9Z7GtdavPcfnP5mnNcS9numgq4Zh6qZj40vhV1M+pWHupmvlUfkkcW+5qX2jy28eH8E7XhwrvucAGYbuVj47ukW3mom4WjNaPw9GJf91KbZRsfkj9fM5R9hNpdU4a6lZ+pWfJM+HeeZYCMXjeUyUlDvnex7+n3rv3m8jXnTFi5F+pm7p2qkaOxmtC1lYf6sDJTN5WgbsrTNSPXCj+nCGgdGdqQoWqshaq5DqgGiOK/ocSdHOeaeXCHu5x/vfaiSxZ7TH4vWn0o91DNyB2qGrnIWErksSE1V6182M1c1GWoWrnI0+n7rpmPgeJaBXCH14c9pnsZyHcQRmCNH53PzEPNklsTG+VnFntsTupWt3JbXDP3NqZo1yrEvTocGY546VAEkBgQ5Bgs7KJzmDjG59luKFAdyoXntQrRuWTgQ4G7JAiPT3vzmhUX1ayul4jwio0ee30+8tQcR+OUuqsGNi4Vca6FmIOAwsSsQnt8PnNd2AkTRIByh/PP7/vCpWcu9nidVG3cUu5zh/NT1IuVxMBXjS6oGjlWuBFDmpSuq3GIkKFqRQAwIrDEaR/5rAxVKxSHDFgMBC5DDlnFKkT/5g7VN657cLHH7KRpE5b8TN2UW7GHYq+OhVkXVI0uanyrEHaTGpYFAGIAbE…"},
  //   {pos: 1, data:":image/png;base64,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"}]
  //   )


  // let isCanvasInteractable = prelim(selectedTool, contextRef.current, canvasRef.current ); 
  // isCanvasInteractableRef.current = isCanvasInteractable;

  return (
    <div id="canvas-panel">
      <div class="wcanvas">
        <canvas 
          class="wcanvas-main"
          width={""+ props.sprite.width + "px"}
          height={""+ props.sprite.height + "px"}        
        />
        
        
        <div class="wcanvas-layers">
        {layers.map((layer) => (
            <CanvasLayer {...props} layer = {layer}/>

        ))}
        </div>
       
      </div>
  
    </div>
  );
}

export default App;