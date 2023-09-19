import type {Country} from "@/app/page";
import Link from "next/link";
import Image from "next/image";

async function getCountryByName(name:string): Promise<Country>{
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`);
    return (await response.json())[0];
}

export default async function CountryPage({
    params:{name},
}:{
    params: {name : string};
}) {
    const country = await getCountryByName(name);

    return (
    <section className="flex flex-col container">

        <h1 className="text-5xl text-center font-bold text-gray-800 my-16">{country.translations.por.common}</h1>
        <Link className="flex items-center" href="/">
            <Image src="/Vector.png" alt="Ícone de seta de voltar" width={24} height={24}></Image>
            Voltar</Link>
        <article className="flex justify-between min-w-full p-10 bg-white rounded-xl">

        </article>

    </section>
    
    
    );
}