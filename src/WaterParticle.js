WaterParticle = cc.Node.extend({
    draw:function(){
        // closed purble poly
        /*glColor4ub(255, 0, 255, 255);*/
        //glColor4f(1.0, 0.0, 1.0, 1.0);
        cc.renderContext.fillStyle = "rgba(0,0,255,1)"
        //glLineWidth(2);
        cc.renderContext.lineWidth = "0";

        var numPoints = 8*2;
        var angle = 2 * Math.PI / numPoints
        var radius = 5;
        var centreX = 0;
        var centreY = 0;
        var vertices2 = [];
        for(var i = 0; i < numPoints; i++)
        {
            vertices2[vertices2.length] = cc.p(
                centreX + radius * Math.sin(i * angle),
                centreY + radius * Math.cos(i * angle)
            );
        }
        cc.drawingUtil.drawPoly(vertices2, 3, true,true);
    }
})