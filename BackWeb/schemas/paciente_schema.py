from pydantic import BaseModel
from typing import Optional, List
from model.paciente import Paciente
import json
import numpy as np

class PacienteSchema(BaseModel):
    """ Define como um novo paciente a ser inserido deve ser representado
    """
    name: str = "Maria"
    grav: float = 1.021
    ph: float = 5.91
    osm: int = 725
    cond: float = 14.9
    urea: int = 296
    calc: float = 2.45
    
class PacienteViewSchema(BaseModel):
    """Define como um paciente será retornado
    """
    id: int = 1
    name: str = "Maria"
    grav: float = 1.021
    ph: float = 5.91
    osm: int = 725
    cond: float = 14.9
    urea: int = 296
    calc: float = 2.45
    target: int = 0
    
class PacienteBuscaSchema(BaseModel):
    """Define como deve ser a estrutura que representa a busca.
    Ela será feita com base no nome do paciente.
    """
    name: str = "Maria"

class ListaPacientesSchema(BaseModel):
    """Define como uma lista de pacientes será representada
    """
    pacientes: List[PacienteSchema]

    
class PacienteDelSchema(BaseModel):
    """Define como um paciente para deleção será representado
    """
    name: str = "Maria"
    
# Apresenta apenas os dados de um paciente    
def apresenta_paciente(paciente: Paciente):
    """ Retorna uma representação do paciente seguindo o schema definido em
        PacienteViewSchema.
    """
    return {
        "id": paciente.id,
        "name": paciente.name,
        "grav": paciente.grav,
        "ph": paciente.ph,
        "osm": paciente.osm,
        "cond": paciente.cond,
        "urea": paciente.urea,
        "calc": paciente.calc,
        "target": paciente.target
    }
    
# Apresenta uma lista de pacientes
def apresenta_pacientes(pacientes: List[Paciente]):
    """ Retorna uma representação do paciente seguindo o schema definido em
        PacienteViewSchema.
    """
    result = []
    for paciente in pacientes:
        result.append({
            "id": paciente.id,
            "name": paciente.name,
            "grav": paciente.grav,
            "ph": paciente.ph,
            "osm": paciente.osm,    
            "cond": paciente.cond,
            "urea": paciente.urea,
            "calc": paciente.calc,
            "target": paciente.target
        })

    return {"pacientes": result}

