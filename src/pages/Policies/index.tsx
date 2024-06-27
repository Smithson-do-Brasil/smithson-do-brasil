import { Tabs, TabsContent, TabsList } from '@/components/ui/tabs'

import { TabsTrigger } from './components/tabs-trigger'

export function Policies() {
  return (
    <div className="container mx-auto space-y-24 py-24">
      <h1 className="mb-4 text-center font-medium text-6xl">
        Política de Privacidade e Segurança
      </h1>

      <Tabs defaultValue="spam-and-personal-data" className="space-y-10">
        <TabsList className="h-full w-full flex-col justify-between rounded-none bg-transparent px-0 pb-0 lg:flex-row">
          <TabsTrigger
            value="spam-and-personal-data"
            title="Spam e Dados Pessoais"
          />
          <TabsTrigger
            value="anonymous-data-and-cookies"
            title="Dados Anônimos e Cookies"
          />
          <TabsTrigger value="external-links" title="Links Externos" />
          <TabsTrigger
            value="information-security-policy"
            title="Política de Segurança da Informação"
          />
        </TabsList>

        <div className="text-base text-foreground">
          <TabsContent value="spam-and-personal-data">
            Dentro de nossa política de privacidade não praticamos envio de
            spams. Tampouco solicitamos o envio de dados pessoais por e-mail.
            Caso receba alguma mensagem solicitando informações pessoais, por
            favor envie um e-mail para{' '}
            <a href="mailto:dpo@smithson.com.br" className="underline">
              dpo@smithson.com.br
            </a>
            .
          </TabsContent>
          <TabsContent value="anonymous-data-and-cookies">
            A fim de aperfeiçoar a qualidade de navegação e funcionalidades do
            site, a Smithson coleta informações estatísticas e analíticas,
            geralmente ligadas a aspectos técnicos ou relativos à navegação no
            site. Os dados podem ser coletados e armazenados por meio de cookies
            – arquivos de texto contendo informações de identificação que ficam
            armazenados em seu computador – scripts de servidor (PHP, ASP, etc)
            e em cliente (javascript) próprios ou em ferramentas de terceiros.
            Apesar dos cookies não serem prejudiciais ao seu equipamento, o
            usuário tem a liberdade de recusar a utilização, bastando para isso
            acessar as configurações de seu navegador (browser), assim como
            impedir a execução de javascript.
          </TabsContent>
          <TabsContent value="external-links">
            Embora a empresa utilize links externos que acredita ser de
            interesse dos usuários do site smithson.com.br, a empresa não se
            responsabiliza pelas informações coletadas em sites externos que
            possuam link no website Smithson.
          </TabsContent>
          <TabsContent
            value="information-security-policy"
            className="space-y-4"
          >
            <p>
              A Smithson do Brasil adota a seguinte política de segurança da
              informação para garantir que todos os objetivos de Segurança da
              Informação sejam atendidos, quais sejam:
            </p>
            <ul className="list-disc">
              <li>
                Estabelecer diretrizes e normas que permitam aos funcionários e
                prestadores de serviços seguir padrões de comportamento
                desejáveis e aceitáveis, de acordo com a legalidade e as boas
                práticas mundiais, a fim de mitigar riscos técnicos e jurídicos;
              </li>
              <li>
                Nortear a definição de procedimentos específicos de Segurança da
                Informação e a implementação de controles e processos para o
                atendimento de seus requisitos;
              </li>
              <li>
                Garantir confidencialidade, integridade, disponibilidade e
                orientação para fluxo de processamento das informações por todo
                o seu ciclo de vida, dentro dos padrões legais vigentes;
              </li>
              <li>
                Prevenir possíveis incidentes e responsabilidade legal da
                instituição e de seus funcionários e prestadores de serviços;
              </li>
              <li>
                Garantir a normalidade e a continuidade das atividades da
                Smithson, protegendo os processos críticos contra falhas ou
                desastres significativos;
              </li>
              <li>
                Atender aos requisitos legais, regulamentares e contratuais
                pertinentes à atividade da Smithson;
              </li>
              <li>
                Minimizar os riscos de danos, perdas financeiras, participação
                no mercado, confiança de clientes e de parceiros ou qualquer
                outro impacto negativo nas atividades da Smithson resultante de
                uma falha de segurança;
              </li>
              <li>
                Assegurar o treinamento contínuo e atualizado das políticas e
                dos procedimentos de Segurança da Informação, enfatizando as
                obrigações das pessoas em relação à respectiva segurança;
              </li>
              <li>
                Garantir que todas as responsabilidades da Segurança da
                Informação sejam claramente definidas e preservadas.
              </li>
            </ul>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}
