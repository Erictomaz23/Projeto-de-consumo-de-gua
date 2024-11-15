import { Injectable } from '@nestjs/common';

@Injectable()
export class ConsumoService {
  registrarConsumo(consumoData: { userId: string, quantidade: number, dataLeitura: string }) {
    
  }

  consultarHistorico(userId: string, dataInicial: string, dataFinal: string) {
    
  }

  alertaConsumoElevado(userId: string) {
    
  }
}
