
const cashflow = [
    {
        month: "enero",
        inflow: 1500,
        outflow: 1500
    },
    {
        month: "febrero",
        inflow: 2500,
        outflow: 2500
    },
    {
        month: "marzo",
        inflow: 84683,
        outflow: 1155
    },
    {
        month: "abril",
        inflow: 135353,
        outflow: 1533
    },
    {
        month: "mayo",
        inflow: 1535,
        outflow: 5434
    },
    {
        month: "junio",
        inflow: 4343354,
        outflow: 5434543
    },
    {
        month: "julio",
        inflow: 435453,
        outflow: 4543
    },
    {
        month: "agosto",
        inflow: 78351,
        outflow: 7816
    },
    {
        month: "septiembre",
        inflow: 1878,
        outflow: 95634
    },
    {
        month: "octubre",
        inflow: 48483,
        outflow: 9433
    },
    {
        month: "noviembre",
        inflow: 35483,
        outflow: 53133
    },
    {
        month: "diciembre",
        inflow: 3843,
        outflow: 348133
    },
]


const trimFlows = (cashflow)=>{
    const trimmedFlow = {
        inflow: cashflow.inflow,
        outflow: cashflow.outflow
    }
    
    return trimmedFlow;
}

const sumFlows = (cashflow)=>{
    const trimmedFlow = cashflow.map(value => trimFlows(value));
    //creo un array vacio donde voy a guardar en la primera posicion, la suma de los ingresos y en la segunda, la suma de los egresos
    var flows=[]; 

    flows.push(trimmedFlow.reduce((prev, curr)=> prev + curr.inflow, 0));
    flows.push(trimmedFlow.reduce((prev, curr)=> prev + curr.outflow, 0));

    console.log(flows);

    return flows;
}


const cashFlowisPositive = (cashflow) => {
    return cashflow.reduce((prev,curr)=> prev - curr) > 0;
}

let flows = sumFlows(cashflow);

if (cashFlowisPositive(flows)) {
    alert ("El flujo no genera pérdidas ヾ(＠^∇^＠)ノ");
} else {
    alert ("El flujo genera pérdidas (இдஇ; )");
}