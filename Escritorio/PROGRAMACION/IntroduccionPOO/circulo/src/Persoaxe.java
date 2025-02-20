public class Persoaxe {
    private String nome;
    private int vida;
    private int resistencia;
    private int forza;
    private int velocidade;
    private int experiencia;
    private String apariencia;
    private String[] habilidades;
    private String[] equipamiento;

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }


    public int getVida() {
        return vida;
    }

    public void setVida(int vida) {
        if (vida >= 0 && vida <= 5) this.vida = vida;
        else this.vida = 3;
    }


    public int getResistencia() {
        return resistencia;
    }

    public void setResistencia(int resistencia) {
        if (resistencia >= 0 && resistencia <= 5) this.resistencia = resistencia;
        else this.resistencia = 0;
    }


    public int getForza() {
        return forza;
    }

    public void setForza(int forza) {
        if (forza >= 0 && forza <= 0) this.forza = forza;
        else this.forza = 0;
    }


    public int getVelocidade() {
        return velocidade;
    }

    public void setVelocidade(int velocidade) {
        if (velocidade >= 0 && velocidade <= 5) this.velocidade = velocidade;
        else this.velocidade = 0;
    }

    public String[] getHabilidades() {
        return habilidades;
    }


    public Persoaxe() {
        nome = "Invitado";
        vida = 3;
        resistencia = 3;
        forza = 3;
        velocidade = 3;
        experiencia = 1;
        apariencia = "Soldado raso";
        habilidades = new String[5];
        equipamiento = new String[5];

        public Persoaxe(String nom, int vida, int rest, int forza, int vel, int exp, String apariencia, String[]
        habilidades, String[]equipamiento){
            this.nome = nom; // Asignar nombre
            this.vida = vida; // Asignar vida
            this.resistencia = rest; // Asignar resistencia
            this.forza = forza; // Asignar fuerza
            this.velocidade = vel; // Asignar velocidad
            this.experiencia = exp; // Asignar experiencia
            this.apariencia = apariencia; // Asignar apariencia, corregido
            setHabilidades(habilidades); // Usar el setter para habilidades (o asignar directamente)
            this.equipamiento = equipamiento; // Asignar equipamiento directamente
        }
    }
}
