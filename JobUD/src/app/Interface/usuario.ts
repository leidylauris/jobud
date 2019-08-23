export interface Usuario{
    nombre: string;
    apellido?: string;
    email: string;
    rol: string;
    ingreso?: boolean;
    rutUrl?: string;
    camaraUrl?: string;
}