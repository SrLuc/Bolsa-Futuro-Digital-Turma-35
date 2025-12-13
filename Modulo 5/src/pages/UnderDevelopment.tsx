import { Link } from "react-router-dom";

function UnderDevelopment() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            textAlign: "center",
            padding: "20px"
        }}>
            <h1>🚧 Página em Desenvolvimento</h1>
            <p>Esta página ainda está sendo construída. Volte mais tarde!</p>

            <Link to="/" style={{
                marginTop: "20px",
                padding: "10px 20px",
                backgroundColor: "#007bff",
                color: "#fff",
                borderRadius: "8px",
                textDecoration: "none"
            }}>
                Voltar ao Início
            </Link>
        </div>
    );
}

export default UnderDevelopment;
