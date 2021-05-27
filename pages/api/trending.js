import { apiBase, apiKey } from '../../lib/tmdb';

export default async (req, res)=>{
    const resultado = await fetch(`${apiBase}/trending/movie/week?api_key=${apiKey}&language=pt-BR`);
    const json = await resultado.json();
    res.status(200).json({
        list: json.results
    })
} 