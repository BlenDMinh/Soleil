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

    pub fn create_user(ctx: Context<CreateUser>, name: String, avatarImage: String) -> Result<()> {
        let user_account = &mut ctx.accounts.user_account;
        let authority = &mut ctx.accounts.authority;
        user_account.name = name;
        user_account.avatarImage = avatarImage;
        user_account.authority = authority.key();
        Ok(())
    }
}

#[derive(Accounts)]
#[instruction()]
pub struct CreateUser<'info> {
    #[account(
        init,
        seeds = [USER_SEED, authority.key().as_ref()],
        payer = authority,
        bump,
        space = 2500
    )]
    pub user_account: Account<'info, UserAccount>,

    #[account(mut)]
    pub authority: Signer<'info>,

    pub system_program: Program<'info, System>
}

// Instruction
#[derive(Accounts)]
pub struct Solei<'info> {
    #[account(mut)]
    payer: Signer<'info>,
    system_program: Program<'info, System>,
}

// State
#[account]
pub struct UserAccount {
    name: String,
    avatarImage: String,
    authority: Pubkey
}

// Const

#[constant]
pub const USER_SEED: &[u8] = b"soleil_user";