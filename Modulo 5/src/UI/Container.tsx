interface iContainer {
    children: React.ReactNode,
    position: string
}

const Container = ({ children, position }: iContainer) => {

    return <div style={{ display: "flex", justifyContent: `${position}` }}>
        {children}
    </div >
}

export default Container