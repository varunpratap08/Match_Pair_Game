const symbols = [
    '🍇',
    '🍉',
    '🚗',
    '🍌',
    '🏠',
    '🥭',
    '🍎',
    '🐯',
    '🍒',
    '🍓',
    '🐵',
    '🥝',
    '🍿',
    '🏀',
    '🎱',
    '🐻',
    
  ];
 
 
  var shuf_symbols=symbols.sort(()=>(Math.random()>.5)?2:-1);
  for(var i=0;i<symbols.length;i++)
  {
    let box=document.createElement("div");
    box.className="item";
    box.innerHTML=shuf_symbols[i];
    document.querySelector(".game").appendChild(box);
    let btn= document.querySelector(".btn");
 btn.addEventListener(click,()=>{
    window.location.reload();
    });
  }