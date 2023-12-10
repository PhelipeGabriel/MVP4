from sqlalchemy import Column, String, Integer, DateTime, Float
from sqlalchemy.orm import relationship
from datetime import datetime
from typing import Union

from  model import Base

# colunas = Gravity,Ph,Osmo,Cond,Urea,Calc,Target

class Paciente(Base):
    __tablename__ = 'pacientes'
    
    id = Column(Integer, primary_key=True)
    name= Column("Name", String(50))
    grav = Column("Gravity", Float)
    ph = Column("Ph", Float)
    osm = Column("Osmo", Integer)
    cond = Column("Cond", Float)
    urea = Column("Urea", Integer)
    calc = Column("Calc", Float)
    target = Column("Diagnosticar", Integer, nullable=True)
    data_insercao = Column(DateTime, default=datetime.now())
    
    def __init__(self, grav:float, ph:float, osm:int, name:str,
                 cond:float, urea:int, calc:float, 
                 target:int, 
                 data_insercao:Union[DateTime, None] = None):
        """
        Cria um Paciente

        Arguments:
        name: Nome do Paciente.
            grav: Gravidade específica, dendidade da urina em relação à água.
            ph: Logaritmo negativo do íon de hidrogênio.
            osm: Osmolaridade é proporcional à concentração de moléculas em solução.
            cond: Condutividade é proporcional à concentração de íons carregados na solução.
            urea: Concentração de ureia em milimetros por litro
            calc: Concentração de cálcio (CALC) em milimetros por litro.
            Target: Diagnóstico
            data_insercao: Data de quando o paciente foi inserido à base
        """
        self.name=name
        self.grav = grav
        self.ph = ph
        self.osm = osm
        self.cond = cond
        self.urea = urea
        self.calc = calc
        self.target = target

        # se não for informada, será o data exata da inserção no banco de dados.
        if data_insercao:
            self.data_insercao = data_insercao