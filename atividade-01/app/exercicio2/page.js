export default function Exercicio2 () {
    return(
        <div>
            <div    
                style={{
                    backgroundColor: "red",
                    width: "700px",
                    padding:"0px",
                    margin: "auto",
                    boxSizing: "content-box"
                }}
            >
            DIV com fundo vermelho
            </div>

            <div 
                style={{
                    backgroundColor: "green",
                    width: "700px",
                    padding: "25px",
                    margin: "auto",
                    boxSizing: "content-box"
                }}
            >
            DIV com fundo verde
            </div>
            
            <div
                style={{
                    width: "600px",
                    margin: "auto", 
                    marginTop: "2rem"
                }}
            >
            Os DIVs não estão totalmente alinhados porque o div com fundo verde possui um padding de 25px em cada lado. Dessa forma, ele passa a ter 750px de largura, enquanto o div com fundo vermelho continua com apenas 700px.
            </div>
        </div>
    );

}