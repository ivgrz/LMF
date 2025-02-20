
/**
 * Clase de objetos para incremetar la fecha
 *  @version 1.0
 * @autor: Karly Albarrán
 */

public class calendario { //clase que trabajaremos
    private int dia;
    private int mes;
    private int ano;
    //  private String data;
    //  private boolean otraFecha;

    public class Calendario {
        // Atributos
        private int dia;
        private int mes;
        private int ano;

        // Constructor
        public Calendario(int dia, int mes, int ano) {
            this.dia = dia;
            this.mes = mes;
            this.ano = ano;
        }

        // Métodos getter y setter
        public int getDia() {
            return dia;
        }

        public void setDia(int dia) {
            this.dia = dia;
        }

        public int getMes() {
            return mes;
        }

        public void setMes(int mes) {
            this.mes = mes;
        }

        public int getAno() {
            return ano;
        }

        public void setAno(int ano) {
            this.ano = ano;
        }

        // Métodos para incrementar la fecha
        public void incrementarDias() {
            dia++;
            if (dia > 30) {
                dia = 1;
                incrementarMes();
            }
        }

        public void incrementarMes() {
            mes++;
            if (mes > 12) {
                mes = 1;
                incrementarAno();
            }
        }

        public void incrementarAno() {
            ano++;
        }

        // Método para mostrar la fecha en formato String
        public String toString() {
            return "La fecha es: " + dia + "/" + mes + "/" + ano;
        }

        // Método para verificar si el año es bisiesto
        public boolean esBisiesto() {
            // Un año es bisiesto si es divisible entre 4, pero no entre 100, a menos que también sea divisible entre 400
            if ((ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0)) {
                return true;
            }
            return false;
        }

        // Método equals para comparar dos fechas
        @Override
        public boolean equals(Object obj) {
            if (this == obj) return true;
            if (obj == null || getClass() != obj.getClass()) return false;
            Calendario otraFecha = (Calendario) obj;
            return dia == otraFecha.dia && mes == otraFecha.mes && ano == otraFecha.ano;
        }
    }
}
