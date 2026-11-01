import { apiClient } from '@/lib/api-client';

export interface HealthStatus {
  status: string;
  timestamp?: string;
}

export const healthService = {
  async check(): Promise<HealthStatus> {
    const response = await apiClient.get<HealthStatus>('/health');

    return response.data;
  },
};
