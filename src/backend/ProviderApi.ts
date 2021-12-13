import type { Appointment, Provider, ProviderKeyPair } from 'types';
import { ProviderSecretData } from 'types/ProviderSecretData';

export class ProviderApi {
    protected secret: string | null = null;
    protected keyPair: ProviderKeyPair | null = null;

    public async authenticate(
        secret: string,
        keyPair: ProviderKeyPair
    ): Promise<boolean> {
        this.keyPair = keyPair;
        this.secret = secret;
        return false;
    }

    public async isAuthenticated(): Promise<boolean> {
        return !!this.secret && !!this.keyPair;
    }

    public async logout(): Promise<boolean> {
        this.secret = null;
        this.keyPair = null;

        return true;
    }

    public async getAppointments(): Promise<Appointment[]> {
        return [];
    }

    public async publishAppointments(
        appointments: Appointment[]
    ): Promise<boolean> {
        return false;
    }

    public async updateAppointment(appointment: Appointment): Promise<boolean> {
        return false;
    }

    public async cancelAppointment(appointmentId: string): Promise<boolean> {
        return false;
    }

    public async storeProvider(provider: Provider): Promise<boolean> {
        return false;
    }

    public async backupData(): Promise<ProviderSecretData> {
        return {
            secret: '1234567890',
            keyPair: 'foobar',
        };
    }
}
