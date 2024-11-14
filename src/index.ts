import { Funcionario } from "./model/funcionario";
import { Empresa } from "./model/empresa";

let escritorio: Empresa = new Empresa([])
let funcionario1: Funcionario = new Funcionario(100, "Felipe", "Gestor", 8000)
let funcionario2: Funcionario = new Funcionario(101, "Gabriel", "Analista", 5000)
let funcionario3: Funcionario = new Funcionario(102, "Alexandre", "Assistente", 2500)

escritorio.adicionarFuncionario(funcionario1)
escritorio.adicionarFuncionario(funcionario2)
escritorio.adicionarFuncionario(funcionario3)

escritorio.atualizarSalario(102, 3000)
escritorio.atualizarSalario(10, 3000)

let funcionariox: Funcionario | undefined = escritorio.consultarFuncionario(102)
console.log(funcionariox ? funcionariox : "Funcionario nao encontrado")