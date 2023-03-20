
<div class="container">
        <h1>Calculatrice JS</h1>
        <div class="col">
            <input id="screen"  type="text" placeholder="0">
        </div>
        <div class="btns" onclick="changeColor()" >
            <div class="row">
                <button id="back" onclick="backSpace()">CE</button>
                <button onclick="getRandom()">Rand</button>
                <button class="btn">(</button>
                <button class="btn">)</button>
                <button class="btn">%</button>
                <button onclick ="screen.value= '' ">AC</button>    
            </div>
            <div class="row">
                <button onclick = "sin()">sin</button>
                <button onclick="pi()">pi</button>
                <button class="btn">7</button>
                <button class="btn">8</button>
                <button class="btn">9</button>
                <button class="btn">÷</button>    
            </div>
            <div class="row">
                <button onclick="cost()">cost</button>
                <button onclick="log()">log</button>
                <button class="btn">4</button>
                <button class="btn">5</button>
                <button class="btn">6</button>
                <button class="btn">*</button>    
            </div>
            <div class="row">
                <button onclick="tan()">tan</button>
                <button onclick="sqrt()">root</button>
                <button class="btn">1</button>
                <button class="btn">2</button>
                <button class="btn">3</button>
                <button class="btn">-</button>    
            </div>
            <div class="row">
                <button onclick = "e()">e</button>
                <button onclick="pow()">x^</button>
                <button class="btn">0</button>
                <button class="btn">.</button>
                <button id="eval" onclick="screen.value =  window.eval(screen.value)">=</button>
                <button class="btn">+</button>    
            </div>
            
        </div>

    </div>
