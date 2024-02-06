import { Partners as PartnersData, PartnersItem } from './partners-item'

export function Partners() {
  const partners: PartnersData[] = [
    {
      image: 'empresas-parceiras/bom-pastor.png',
      title: 'Bom Pastor',
      url: 'https://cvbp.com.br',
    },
    {
      image: 'empresas-parceiras/clinica-lis.png',
      title: 'Clínica Lis',
      url: 'https://www.lisclinica.com.br',
    },
    {
      image: 'empresas-parceiras/refrigerantes-convencao.png',
      title: 'Refrigerantes Convenção',
      url: 'https://www.refrigerantesconvencao.com.br',
    },
    {
      image: 'empresas-parceiras/luiz-mendes.png',
      title: 'Luiz Mendes Advocacia e Assessoria Jurídica',
      url: 'https://luizmendesadv.com.br/',
    },
    {
      image: 'empresas-parceiras/goldencross.png',
      title: 'Golden Cross',
      url: 'https://www.goldencross.com.br',
    },
    {
      image: 'empresas-parceiras/ilaha.jpg',
      title: 'Ilaha',
      url: 'https://www.ilahaprodutosdelimpeza.com.br',
    },
    {
      image: 'empresas-parceiras/inde-consult.png',
      title: 'Inde Consult',
      url: 'https://www.indexconsult.com.br',
    },
    {
      image: 'empresas-parceiras/koni.png',
      title: 'Koni',
      url: 'https://www.koni.com.br/tabs/cardapioapp',
    },
    {
      image: 'empresas-parceiras/lebonton.png',
      title: 'LeBonTon',
      url: 'https://www.lebonton.com.br/tabs/cardapioapp',
    },
    {
      image: 'empresas-parceiras/portoreal.png',
      title: 'Hotel Porto Real Resort',
      url: 'https://hotelportoreal.com.br',
    },
    {
      image: 'empresas-parceiras/recom-service.png',
      title: 'Recom Service',
      url: 'https://www.recomservice.com.br',
    },
    {
      image: 'empresas-parceiras/spoleto.png',
      title: 'Spoleto',
      url: 'https://www.spoleto.com.br',
    },
    {
      image: 'empresas-parceiras/torre-de-belem.jpg',
      title: 'Torre de Belém',
      url: 'https://torredebelempapelaria.com.br',
    },
    {
      image: 'empresas-parceiras/viamia.png',
      title: 'Via Mia',
      url: 'https://www.viamia.com.br',
    },
    {
      image: 'empresas-parceiras/vlm.png',
      title: 'VLM Administração de Imóveis',
      url: 'https://www.vlmvimoveis.com',
    },
    {
      image: 'empresas-parceiras/wizard.png',
      title: 'Wizard',
      url: 'https://www.wizard.com.br',
    },
  ]

  return (
    <section className="container my-20 flex flex-col items-center justify-center gap-8 lg:gap-20">
      <h1 className="text-2xl lg:text-4xl">
        Empresas que confiam no nosso trabalho
      </h1>

      <PartnersItem data={partners} />
    </section>
  )
}
