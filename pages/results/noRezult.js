import Link from 'next/link';

export default function noRezult() {
    return (
        <>
            <h1>Поиск не дал результатов</h1>
            <Link href={"/"}>
                <a>Новый поиск</a>
            </Link>
        </>
    )
}