export class AccountsService {
  accounts: { name: string; status: string }[] = [
    {
      name: 'Dummy Text',
      status: 'Active'
    }
  ];

  onNewAccountAdded(name: string, status: string) {
    this.accounts.push({
      name: name,
      status: status
    });
  }

  onStatusChanged(id: number, newStatus: string) {
    this.accounts[id].status = newStatus;
  }
}
