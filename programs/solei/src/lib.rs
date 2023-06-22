use anchor_lang::prelude::*;

declare_id!("8jXvG9wdujAedJ3cae4NyJkQseY6ziQrr85ZKVzh4u2o");

#[program]
pub mod solei {
    use super::*;

    pub fn solei(ctx: Context<Solei>) -> Result<()> {
        let payer = &mut ctx.accounts.payer.to_account_info();
        let system_program = ctx.accounts.system_program.to_account_info();
        msg!("hello 123");
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Solei<'info> {
    #[account(mut)]
    payer: Signer<'info>,
    system_program: Program<'info, System>,
}
