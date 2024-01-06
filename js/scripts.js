class BoxShadowGenerator{ //vamos setar nossos objetos com valores, ou seja os objetos já estão pré-definidos
       constructor(horizontal,horizontalRef,vertical,verticalRef,blur,blurRef,spread,spreadRef,color, colorRef,opacity,opacityRef,inset,previewBox,rule,webkitRule,mozRule){//parametro

        this.horizontal = horizontal; // agora isso é propriedade do objeto
        this.horizontalRef = horizontalRef;
        this.vertical = vertical;
        this.verticalRef = verticalRef;
        this.blur = blur;
        this.blurRef = blurRef;
        this.spread = spread;
        this.spreadRef = spreadRef;
        this.color = color;
        this.colorRef = colorRef;
        this.opacity = opacity;
        this.opacityRef = opacityRef;
        this.inset = inset;
        this.previewBox = previewBox;
        this.rule = rule;
        this.webkitRule = webkitRule;
        this.mozRule = mozRule;

       }
       initialize(){//esse método já vai colocar o valor do input no na caixa de valores
        this.horizontalRef.value = horizontal.value 
        this.verticalRef.value = vertical.value
        this.blurRef.value = blur.value
        this.spreadRef.value = spread.value

        this.applyRule()//já chamamos a função para que quando o método for aplicado já apareca nas regras
        this.showRule()
       }

       applyRule(){//aqui estamos mudando o ccs da caixa de preview

        this.previewBox.style.boxShadow = `${this.horizontalRef.value}px ${this.verticalRef.value}px ${this.blurRef.value}px ${this.spreadRef.value}px #000000`
        this.correntRule = this.previewBox.style.boxShadow //aqui os valores do preview box serão anexados a seção que mostra as regras
       }

       showRule(){//aqui pegamos os valores do correntRule e atribuimos os valores a cada item da div
        this.rule.innerText = this.correntRule
        this.webkitRule.innerText = this.correntRule
        this.mozRule.innerText = this.correntRule
       }
       //nesse caso como estamos dentro de uma class os métodos equivalem a função

       upudateValue(type, value){// neste caso passamos como parâmetro o type e o value, com o switch passamos o type que caso o type for horizontal, vai pegar o valor da horizontal e assim por diante, feito isso já podemos que aplicam e mostram a shadowbox aqui/importante: a cada case use o brake snão vai vazar as regras em todos
            switch(type){
                case "horizontal":
                    this.horizontalRef.value = value
                    break

                case "vertical":
                    this.verticalRef.value = value   
                    break 

                case "blur":
                    this.blurRef.value = value
                    break
                    
                case "spread":
                    this.spreadRef.value =value 
                    break
            }
            this.applyRule()
            this.showRule()
       }
}

// seleção de elementos 
const horizontal = document.querySelector("#horizontal")
const horizontalRef = document.querySelector("#horizontal-value")
const vertical = document.querySelector("#vertical")
const verticalRef = document.querySelector("#vertical-value")
const blur = document.querySelector("#blur")
const blurRef = document.querySelector("#blur-value")
const spread = document.querySelector("#spread")
const spreadRef = document.querySelector("#spread-value")

const color = document.querySelector("#color")
const colorRef = document.querySelector("#color-value")

const opacity = document.querySelector("#opacity")
const opacityRef = document.querySelector("#opacity-value")

const inset = document.querySelector("#inset")

const previewBox = document.querySelector("#box")

const rule = document.querySelector("#rule span")
const webkitRule = document.querySelector("#webkit-rule span")
const mozRule = document.querySelector("#moz-rule span")


const boxShadow = new BoxShadowGenerator(horizontal,// agora as classe já tem as propriedades setadas
    horizontalRef,
    vertical,
    verticalRef,
    blur,
    blurRef,
    spread,
    spreadRef,
    color,
    colorRef,
    opacity,
    opacityRef,
    inset,
    previewBox,
    rule,
    webkitRule,
    mozRule);

    console.log(boxShadow)

    boxShadow.initialize()
//eventos

horizontal.addEventListener("input",(e) => {
    const value = e.target.value
    boxShadow.upudateValue("horizontal", value)
})

vertical.addEventListener("input",(e) => {
    const value = e.target.value
    boxShadow.upudateValue("vertical", value)
})

blur.addEventListener("input",(e) => {
    const value = e.target.value
    boxShadow.upudateValue("blur", value)
})

spread.addEventListener("input",(e) => {
    const value = e.target.value
    boxShadow.upudateValue("spread", value)
})


// funções