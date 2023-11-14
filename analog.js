

    setInterval((myWatch) => {
  

        d = new Date();
        h = d.getHours();
        m = d.getMinutes();
        s = d.getSeconds();
    
        hRotation = 30*h + m/2
        mRotation = 6*m
        sRotation = 6*s
    
        hours.style.transform = `rotate(${hRotation}deg)`;
    
        minutes.style.transform = `rotate(${mRotation}deg)`;
        seconds.style.transform = `rotate(${sRotation}deg)`;
        const yash = hours.style.transform;
    
    
        
    }, 1000);
    





