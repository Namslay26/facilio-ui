import { Component, Prop, h, getAssetPath } from '@stencil/core';


@Component({
  tag: 'fc-icon',
  assetsDirs:['assets'],
})


export class FcIcon {
  @Prop() name: string;
  @Prop() size:number;
  @Prop() color: string;

  
 
  render() { 
    const SVGsource = getAssetPath(`./assets/${this.name}.svg`);
    return <div><img class ="icon" src={ SVGsource } style={{
      width: `${this.size}px`, height: `${this.size}px`, color: `${this.color}` }}/></div>
  }

}
