export enum StatusEnum {
   active = 1,
   inactive = 2,
}

export const StatusLabel: { [key in StatusEnum]: string } = {
   [StatusEnum.active]: 'Ativo',
   [StatusEnum.inactive]: 'Inativo',
};
