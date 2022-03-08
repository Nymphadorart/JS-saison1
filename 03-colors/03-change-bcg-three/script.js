
// 03-colors/03-change-bcg-three/script.js - 3.3: background color (3)


(() => {
    document.getElementById("run").addEventListener ("click", () => {
        
        function myRandomColor() {
            let red = Math.round(Math.random()*256);
            let green = Math.round(Math.random()*256);
            let blue = Math.round(Math.random()*256);
            let color = "rgb(" + red + ", " + green + ", " + blue + ")";
            
            document.body.style.background = color;
           
        }
        myRandomColor();
        
        

        //(background-color , '#'+(Math.random()*0xFFFFFF<<0).toString(16));

    });

})();
