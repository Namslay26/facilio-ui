import { Component, Prop, h, getAssetPath } from '@stencil/core';


@Component({
  tag: 'fc-icon',
  assetsDirs:['assets'],
})


export class FcIcon {
  //defining props here
  @Prop() name: string; //the name of the icon
  @Prop() size:number; //the size (width and height)
  @Prop() color: string; //the color of the icon  
 
  render() { 
    const SVGsource = getAssetPath(`./assets/${this.name}.svg`);
    return <div><img class ="icon" src={ SVGsource } style={{
      width: `${this.size}px`, height: `${this.size}px`, color: `${this.color}` }}/></div>
  }

}
