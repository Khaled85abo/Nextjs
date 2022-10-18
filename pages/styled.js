import dynamic from 'next/dynamic'


const CustomChart = dynamic(
    import("../components/customChart"),
    { ssr: false }
);

const styled = () => {
    return (
        <div><CustomChart /></div>
    )
}

export default styled