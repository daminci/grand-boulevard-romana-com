import dns.resolver

domain = "grandboulevardromana.com"
for rtype in ["A", "AAAA", "MX", "NS", "TXT", "SOA"]:
    try:
        answers = dns.resolver.resolve(domain, rtype)
        print(f"\n{rtype}:")
        for r in answers:
            print(f"  {r}")
    except Exception as e:
        print(f"{rtype}: {type(e).__name__}")