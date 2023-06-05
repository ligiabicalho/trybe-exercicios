# GETTERS e SETTERS
# No arquivo classes.py usamos get_cor e set_cor,
# aqui usaremos decoradores para os getters e setters;


class Liquidificador:
    # Getter
    @property
    def cor(self):
        return self.__cor.upper()

    # Setter
    @cor.setter  # Repare que é @cor.setter, e não @property.setter
    def cor(self, nova_cor):
        if nova_cor.lower() == "turquesa":
            raise ValueError("Não existe liquidificador turquesa")

        self.__cor = nova_cor

    def __init__(self, cor, potencia, tensao, preco):
        self.preco = preco
        self._potencia = potencia
        self._tensao = tensao

        # setter
        self.cor = cor

        # demais atributos omitidos pra focar no getter e setter


liquidificador = Liquidificador("Rosa", "110", "127", "200")

print(liquidificador.cor)  # ROSA
liquidificador.cor = "Vermelho"
print(liquidificador.cor)  # VERMELHO
