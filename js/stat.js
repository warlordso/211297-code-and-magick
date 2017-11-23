window.renderStatistics = function(ctx, names, times) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(110, 20, 420, 270);
    
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(100, 10, 420, 270);

    ctx.fillStyle = '#000000';
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', 120, 40);
    ctx.fillText('Список результатов:', 120, 60);

    var max = -1;
    var maxIndex = -1;
  
    for (var i = 0 ; i < times.length; i++) {
      debugger;
      var time = times[i];
      if (time > max) {
        max = time;
        maxIndex = i;
      }
    }
    
    var barWidth = 40; //ширина полоски
    var lineHeight = 150; //высота полоски
    var step = lineHeight / (max - 0); // шаг
    var indent = 50; // расстояние между полосками
    var initialX = 120; // начальная координата х
    var initialY= 120; // начальная координата y

    for(var i = 0; i < times.length; i++) {
        ctx.fillRect(initialX + indent * i, initialY, barWidth, times[i] * step);
        ctx.fillText(initialX + histogramWidth, names[i], initialY + lineHeight + indent * i);
      }
};