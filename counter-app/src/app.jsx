import Counter from "./components/counter";

export default function App() {
    return (
        <main style={{ minHeight: "100vh", display: "grid", placeItems: "center" }}>
            <Counter initial={0} step={1} />
        </main>
    );
}

