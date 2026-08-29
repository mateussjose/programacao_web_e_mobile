export default function Exercicio1() {
    return(
        <div
            style={{
                width: "100vw",
                height: "100vh",
                backgroundImage: 'url(/background.jpg)',
                backgroundSize: "cover",
                backgroundPosition: "center",
                padding: "2rem"
                
            }}
        >
            <h1
                style={{
                    color: "white",
                    fontWeight:  "bold",
                    backgroundColor: "red",
                    padding: "1rem",
                    border: '2px solid green',
                    display: 'inline-block'
                }}
            >
                Primeiro exercício de CSS 
            </h1>
        </div>
    );
}