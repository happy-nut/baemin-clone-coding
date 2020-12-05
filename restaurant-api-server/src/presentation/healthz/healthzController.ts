import { Controller, Get } from '@nestjs/common'

@Controller()
export class HealthzController {
  @Get('healthz')
  healthz(): unknown {
    return {}
  }
}
