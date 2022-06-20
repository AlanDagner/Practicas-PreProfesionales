import { Pool } from 'pg'

export const pool = new Pool({
    host:'ec2-52-72-56-59.compute-1.amazonaws.com',
    user:'tnpayvoznmdnzp',
    password: 'dd6d678df820496fb8d724ac8f66500623f54e4510b5041a65a7cd62e76d6fa4',
    database: 'd8d4obuvrg0hf4',
    port: 5432,
    ssl:{ rejectUnauthorized:false}
});