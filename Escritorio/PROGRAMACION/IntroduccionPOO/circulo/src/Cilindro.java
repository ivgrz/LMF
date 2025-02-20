public class Cilindro extends Circulo {
    private double altura;

    public Cilindro(double x, double y, double r, double h) {
        super(x, y, r);
        setAltura(h);
    }

    public void setAltura(double h) {
        if (h < 0) altura = 0;
        else altura = h;
    }
    public double getAltura() {
        return altura;
    }

    public double calcularSuperficie() {
        return 2 * super.calculoArea() + super.calculoPerimetro() * altura;
    }

    public double calcularVolumen() {
        return super.calculoArea() * altura;
    }

    @Override
    public String toString() {
        return "O cilindro ten: \n" + super.toString() + "\nAltura= " + altura;
    }
}
