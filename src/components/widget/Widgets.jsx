import React from 'react'
import { WidgetSmall } from '../../components/widget/WidgetSmall';
import { WidgetLarge } from '../../components/widget/WidgetLarge';


export const Widgets = () => {
  return (
    <div className="container py-4">
        <div className="row">
            <div className="border rounded col-12 col-md-5 shadow-lg" 
            style={{ backgroundColor: "rgb(251, 251, 255)", maxHeight: "500px",overflow: "scroll"}}>
                <WidgetSmall/>
            </div>
            <div className="border rounded col-12 col-md-7 shadow-lg"
            style={{ backgroundColor: "rgb(251, 251, 255)", maxHeight: "500px",overflow: "scroll" }}>
                <WidgetLarge/>
            </div>
        </div>
    </div>
  )
}
