import Image from "next/image";

export default function Exercicio4() {
    return (
        <div>
            <div 
                style={{ 
                    display: "flex", 
                    gap: "1.25rem" 
                }}
            >

                <div 
                    style={{ 
                        backgroundColor: "green", 
                        padding: "1.25rem" 
                    }}
                >
                    <Image 
                        src="/teniscasual.jpg"
                        width={150}
                        height={150}
                        alt="Tênis Casual"
                    />
                    <p>Tênis Casual</p>
                    <p>R$ 599,99</p>
                </div>

                <div 
                    style={{ 
                        backgroundColor: "green", 
                        padding: "1.25rem" 
                    }}
                >
                    <Image 
                        src="/tenisesportivo.jpg"
                        width={150}
                        height={150}
                        alt="Tênis Esportivo"
                    />
                    <p>Tênis Esportivo</p>
                    <p>R$ 1.299,99</p>
                </div>

                <div 
                    style={{ 
                        backgroundColor: "green", 
                        padding: "1.25rem" 
                    }}
                >
                    <Image 
                        src="/chuteira.jpg"
                        width={150}
                        height={150}
                        alt="Chuteira"
                    />
                    <p>Chuteira</p>
                    <p>R$ 799,99</p>
                </div>

                <div 
                    style={{ 
                        backgroundColor: "green", 
                        padding: "1.25rem" 
                    }}
                >
                    <Image 
                        src="/chuteirafutsal.jpg"
                        width={150}
                        height={150}
                        alt="Chuteira Futsal"
                    />
                    <p>Chuteira Futsal</p>
                    <p>R$ 599,99</p>
                </div>

                <div 
                    style={{ 
                        backgroundColor: "green", 
                        padding: "1.25rem" 
                    }}
                >
                    <Image 
                        src="/chinelo.jpg"
                        width={150}
                        height={150}
                        alt="Chinelo"
                    />
                    <p>Chinelo</p>
                    <p>R$ 149,99</p>
                </div>

            </div>

            <footer
                style={{
                    backgroundColor: "gray",
                    marginTop: "1.25rem",
                    padding: "1.25rem",
                    textAlign: "center"
                }}
            >
                Adidas
            </footer>
        </div>
    );
}