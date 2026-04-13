module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { password } = req.body || {};

  if (password === process.env.SITE_PASSWORD) {
    res.setHeader('Set-Cookie', 'cc-auth=1; Path=/; Max-Age=2592000; SameSite=Lax');
    return res.status(200).json({ ok: true });
  }

  return res.status(401).json({ ok: false });
};
