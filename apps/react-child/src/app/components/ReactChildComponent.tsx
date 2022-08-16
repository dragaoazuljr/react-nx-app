interface Props {
    title: string
}

export default function ReactChildComponent ({title}: Props) {
    return (
        <div>
            <h1>child - {title || 'child'}</h1>
        </div>
    )
}